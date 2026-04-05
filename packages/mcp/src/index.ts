#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { COMPONENT_DOCS } from "./docs.js";

const server = new Server(
  { name: "koori-ui-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

/* -------- Tool Definitions -------- */

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "list_components",
      description: "List all available Koori UI components with their category and description.",
      inputSchema: {
        type: "object",
        properties: {
          category: {
            type: "string",
            description: "Optional: filter by category (General, Form, Layout, Navigation, Data Display, Feedback)",
          },
        },
      },
    },
    {
      name: "get_component_docs",
      description: "Get detailed documentation for a specific Koori UI component including props, description, and usage example.",
      inputSchema: {
        type: "object",
        properties: {
          component_name: {
            type: "string",
            description: "The component name, e.g. GlassButton, GlassSelect, GlassToast",
          },
        },
        required: ["component_name"],
      },
    },
    {
      name: "search_components",
      description: "Search Koori UI components by name, description, category, or prop names.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Search query, e.g. 'dropdown', 'form input', 'toast notification'",
          },
        },
        required: ["query"],
      },
    },
    {
      name: "get_component_example",
      description: "Get a ready-to-copy usage example for a specific Koori UI component.",
      inputSchema: {
        type: "object",
        properties: {
          component_name: {
            type: "string",
            description: "The component name, e.g. GlassButton",
          },
        },
        required: ["component_name"],
      },
    },
  ],
}));

/* -------- Tool Handlers -------- */

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "list_components") {
    const categoryFilter = (args?.category as string | undefined)?.toLowerCase();
    const components = Object.values(COMPONENT_DOCS)
      .filter((doc) =>
        categoryFilter ? doc.category.toLowerCase() === categoryFilter : true
      )
      .map((doc) => ({
        name: doc.name,
        category: doc.category,
        description: doc.description,
        radix: doc.radix ?? null,
        subComponents: doc.subComponents ?? [],
      }));

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(components, null, 2),
        },
      ],
    };
  }

  if (name === "get_component_docs") {
    const componentName = args?.component_name as string;
    const doc = COMPONENT_DOCS[componentName];

    if (!doc) {
      const similar = Object.keys(COMPONENT_DOCS)
        .filter((k) => k.toLowerCase().includes(componentName.toLowerCase()))
        .slice(0, 5);
      return {
        content: [
          {
            type: "text",
            text: `Component "${componentName}" not found.\n\nDid you mean: ${similar.join(", ") || "none found"}`,
          },
        ],
      };
    }

    const propsTable = doc.props.length > 0
      ? `\n## Props\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n` +
        doc.props.map((p) => `| \`${p.name}\` | \`${p.type}\` | ${p.default ?? "—"} | ${p.description} |`).join("\n")
      : "";

    const subText = doc.subComponents?.length
      ? `\n## Sub-components\n\n${doc.subComponents.join(", ")}`
      : "";

    const radixText = doc.radix ? `\n> **Radix UI:** ${doc.radix}` : "";

    const text = `# ${doc.name}\n\n**Category:** ${doc.category}${radixText}\n\n${doc.description}${subText}${propsTable}\n\n## Example\n\n\`\`\`tsx\n${doc.example}\n\`\`\``;

    return {
      content: [{ type: "text", text }],
    };
  }

  if (name === "search_components") {
    const query = (args?.query as string).toLowerCase();
    const results = Object.values(COMPONENT_DOCS)
      .filter((doc) => {
        const searchable = [
          doc.name,
          doc.description,
          doc.category,
          ...(doc.subComponents ?? []),
          ...doc.props.map((p) => `${p.name} ${p.description}`),
        ]
          .join(" ")
          .toLowerCase();
        return query.split(" ").every((term) => searchable.includes(term));
      })
      .map((doc) => ({
        name: doc.name,
        category: doc.category,
        description: doc.description,
      }));

    return {
      content: [
        {
          type: "text",
          text: results.length > 0
            ? JSON.stringify(results, null, 2)
            : `No components found matching "${args?.query}".`,
        },
      ],
    };
  }

  if (name === "get_component_example") {
    const componentName = args?.component_name as string;
    const doc = COMPONENT_DOCS[componentName];

    if (!doc) {
      return {
        content: [{ type: "text", text: `Component "${componentName}" not found.` }],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: `\`\`\`tsx\n${doc.example}\n\`\`\``,
        },
      ],
    };
  }

  throw new Error(`Unknown tool: ${name}`);
});

/* -------- Start -------- */

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);

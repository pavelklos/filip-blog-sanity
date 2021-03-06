// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: "author",
      type: "document",
      title: "Author",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
        },
        {
          name: "Avatar",
          type: "image",
          title: "Avatar",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "blog",
      type: "document",
      title: "Blog",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
          validation: (Rule) => Rule.required().min(10).max(80),
        },
        {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "coverImage",
          type: "image",
          title: "Cover Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Description",
              type: "text",
            },
          ],
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
              fields: [
                {
                  name: "position",
                  title: "Position",
                  type: "string",
                  options: {
                    list: [
                      { value: "center", title: "Center" },
                      { value: "left", title: "Left" },
                      { value: "right", title: "Right" },
                    ],
                    layout: "radio",
                    isHighlighted: true,
                  },
                },
                {
                  name: "alt",
                  title: "Description",
                  type: "text",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
              options: {
                hotspot: true,
              },
            },
            {
              type: "code",
              options: {
                withFilename: true,
              },
            },
          ],
        },
        {
          name: "date",
          type: "datetime",
          title: "Date",
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: "author",
          title: "Author",
          type: "reference",
          to: [{ type: "author" }],
          validation: (Rule) => {
            return Rule.required();
          },
        },
        {
          name: "slug",
          type: "slug",
          title: "Slug",
          validation: (Rule) => {
            return Rule.required();
          },
        },
      ],
    },
  ]),
});

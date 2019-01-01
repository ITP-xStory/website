const path = require('path')

const createTagPages = (createPage, posts) => {
  const tagPageTemplate = path.resolve('src/templates/tags.js')
  const allTagsTemplate = path.resolve('src/templates/all-tags.js')

  const postsByTags = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = []
        }
        postsByTags[tag].push(node)
      })
    }
  })
  const tags = Object.keys(postsByTags)

  createPage({
    path: `/tags`,
    component: allTagsTemplate,
    context: {
      tags: tags.sort(),
    },
  })
  tags.forEach(tagName => {
    const posts = postsByTags[tagName]

    createPage({
      path: `/tags/${tagName}`,
      component: tagPageTemplate,
      context: {
        posts,
        tagName,
      },
    })
  })
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogPostTemplate = path.resolve(`src/templates/project.js`)
  const docTemplate = path.resolve(`src/templates/guide.js`)

  return (
    graphql(
      `
        {
          allMarkdownRemark {
            edges {
              node {
                html
                id
                frontmatter {
                  date
                  thumbnail
                  path
                  title
                  excerpt
                  tags
                }
              }
            }
          }
        }
      `
    )
      //   creating posts
      .then(result => {
        if (result.errors) {
          return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges.filter(p =>
          p.node.id.includes('projects')
        )

        createTagPages(createPage, posts)

        posts.forEach(({ node }, index) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })
        })
        return result
      })

      // creating docs / guidelines
      .then(result => {
        if (result.errors) {
          return Promise.reject(result.errors)
        }

        const docs = result.data.allMarkdownRemark.edges.filter(d =>
          d.node.id.includes('docs')
        )

        docs.forEach(({ node }, index) => {
          createPage({
            path: node.frontmatter.path,
            component: docTemplate,
          })
        })
      })
  )
}

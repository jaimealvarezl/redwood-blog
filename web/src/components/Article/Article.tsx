import { Link, routes } from '@redwoodjs/router'

type ArticleProps = {
  article: {
    id: number
    title: string
    body: string
    createdAt: string
  }
}

const Article = ({ article }: ArticleProps) => {
  return (
    <article key={article.id}>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <p>{article.body}</p>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article

import Link from 'next/link';
import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import utils from '../../styles/utils.module.css';
import blog from '../../styles/blog.module.css';


type BlogLayoutProps = {
  children: React.ReactNode,
  allTags: {
    [tag: string]: number 
  },
  home?: boolean,
}

export default function BlogLayout(props: BlogLayoutProps) {
  const { children, allTags, home } = props;

  return (
    <Container className={blog.container}>
      <Box>
        {!home ? (
          <nav className={blog.backToHome}>
            <Link href="/blog">← Blog Home</Link>
          </nav>
        ) : (
          <nav className={blog.backToHome}>
            <Link href="/">← Home</Link>
          </nav>
        )}
        <main className={blog['main-left']}>
          {children}
        </main>
        {!home && (
          <nav className={blog.backToHome}>
            <Link href="/blog">← Back to Blog Home</Link>
          </nav>
        )}
      </Box>
      <nav className={blog['nav-right']}>
        <Typography variant="h6" className={utils.listTitle}>Tags</Typography>

        <List aria-label="tags" className={utils.list}>
          {Object.keys(allTags).sort().map((tag) => (
            <ListItem className={utils.compactListItem} key={tag}>
              <ListItemText className={utils.compactListItemText}
                primary={<Link href={`/blog/tags/${tag}`}>{tag} ({allTags[tag]})</Link>} />
            </ListItem>
          ))}
        </List>
      </nav>
    </Container>
  )
}
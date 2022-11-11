import Link from 'next/link';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import utils from '../../styles/utils.module.css';
import blog from '../../styles/blog.module.css';


type BlogLayoutProps = {
  children: React.ReactNode,
  allTags: {
    [tag: string]: number 
  }
}

export default function BlogLayout(props: BlogLayoutProps) {
  const { children, allTags } = props;

  return (
    <Container className={blog.container}>
      <main className={blog['main-left']}>
        {children}
      </main>

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
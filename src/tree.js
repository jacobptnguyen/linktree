// The links form a binary search tree, keyed alphabetically by title:
// every left child comes before its parent and every right child comes after.
//
//               Me
//             /    \
//      LinkedIn    Portfolio
//        /              \
//    GitHub            Resume
//
// GitHub < LinkedIn < Me < Portfolio < Resume
export const tree = {
  title: 'Me',
  left: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jacob-nguyen-138267262/',
    left: { title: 'GitHub', url: 'https://github.com/jacobptnguyen' },
  },
  right: {
    title: 'Portfolio',
    url: 'https://jacob-nguyen-portfolio.vercel.app/',
    right: { title: 'Resume', url: 'https://jacob-nguyen-portfolio.vercel.app/Jacob_Nguyen_resume.pdf' },
  },
}

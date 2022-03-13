export default function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const {children, ...attrs} = props;
  return <a target="_blank" rel="noreferrer" {...attrs}>{children}</a>
}

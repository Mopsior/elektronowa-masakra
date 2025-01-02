import { MDXComponents } from "next-mdx-remote-client/rsc";

export const components: MDXComponents = {
    li: (props) => <li className="list-disc ml-4" {...props} />,
    code: (props) => <code className="bg-gray-100 p-1 rounded-md" {...props} />,
}

export const smallComponents: MDXComponents = {
    p: (props) => <p className="text-sm text-muted-foreground" {...props} />,
}
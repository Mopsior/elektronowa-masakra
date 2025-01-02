import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        code: (props) => <code className="bg-gray-100 p-1 rounded-md" {...props} />,
        h1: (props) => <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl border-b-2 pb-2 px-6 w-fit mx-auto mb-8 uppercase" {...props} />,
        h2: (props) => <h2 className='text-3xl font-semibold tracking-tight pb-1 border-b w-fit mb-2 mt-10' {...props} />,
        h3: (props) => <h3 className='text-2xl font-semibold tracking-tight mb-2 mt-4' {...props} />,
        h4: (props) => <h4 className='text-xl font-semibold tracking-tight' {...props} />,
        p: (props) => <p className='[&:not(:first-child)]:mt-4 leading-7' {...props} />,
        ul: (props) => <ul className='my-6 ml-6 list-disc [&>li]:mt-2' {...props} />,
        ol: (props) => <ol className='my-6 ml-6 list-decimal [&>li]:mt-2' {...props} />,
        a: ({ href, ...props }) => href ? <Link href={href} {...props} className='font-medium text-primary underline underline-offset-4' /> : null,
        Center: (props: React.HTMLAttributes<HTMLDivElement>) => <div className='text-center' {...props} />,
        Xl: (props) => <p className='text-xl' {...props} />,
        Lg: (props) => <p className='text-lg' {...props} />,
        Sm: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className='text-sm' {...props} />,
        Muted: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className='text-sm text-muted-foreground' {...props} />,
    }
}
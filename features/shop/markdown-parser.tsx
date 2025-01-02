import { components, smallComponents } from "@/lib/mdx-components";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { SerializeResult } from "next-mdx-remote-client/serialize";

export const ItemDescription = ({ children }: { children: SerializeResult }) => {
    return (    
        <>
            <MDXRemote source={children} components={components} />
        </>
    )
}

export const SmallDescription = ({ children }: { children: string }) => {
    return (
        <div className="line-clamp-3">
            <MDXRemote source={children} components={smallComponents}/>
        </div>
    )
}
import { PageContent } from "../models/pageContent";
export default function Page({ id, content,className }: PageContent) {
    return (
        <section 
            id={id}
            className={`min-h-screen snap-start snap-always flex flex-col ${className || ""}`}
        >
            <div className="flex-grow flex flex-col">
                <div>{content}</div>
            </div>
        </section>

    );
}

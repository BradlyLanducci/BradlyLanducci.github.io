import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
    note?: String
    codeText: string
};

export const CodeBlock = ({ note, codeText }: CodeBlockProps) => {
    return (
        <>
            <div style={{ marginTop: "32px", marginBottom: "32px" }}>
                <SyntaxHighlighter language="gdscript" style={vscDarkPlus}>
                    {codeText}
                </SyntaxHighlighter >
                <p style={{ fontSize: "14px" }}>{note}</p>
            </div>
        </>
    )
};

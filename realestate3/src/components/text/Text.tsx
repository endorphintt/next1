import React from 'react'

interface TextProps {
    text: string
}

const Text: React.FC<TextProps> = ({ text }) => {
    // Розділяємо текст на абзаци, використовуючи '/n/n' як роздільник
    const paragraphs = text.split('/n/n').map((paragraph) => paragraph.trim())

    return (
        <>
            {paragraphs.map((paragraph, index) => (
                <React.Fragment key={index}>
                    <p>
                        {paragraph.split('/n').map((line, lineIndex) => (
                            <React.Fragment key={lineIndex}>
                                {line}
                                {lineIndex <
                                    paragraph.split('/n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                    {/* Додаємо порожній абзац після кожного основного абзацу для розділення */}
                    {index < paragraphs.length - 1 && <p>&nbsp;</p>}
                </React.Fragment>
            ))}
        </>
    )
}

export default Text

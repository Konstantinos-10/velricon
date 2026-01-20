import React from 'react'

/**
 * Highlights specific phrases within a text string by wrapping them in a styled span.
 * @param text The source text
 * @param phrases Array of phrases to highlight
 * @param highlightClassName CSS classes to apply to highlighted parts
 * @returns An array of React nodes (strings and spans)
 */
export function highlightText(
    text: string,
    phrases: string[],
    highlightClassName: string = "text-strategy-blue"
): React.ReactNode[] {
    if (!phrases || phrases.length === 0) return [text]

    // Sort phrases by length (longest first) to handle overlapping matches correctly
    const sortedPhrases = [...phrases].sort((a, b) => b.length - a.length)

    let parts: Array<{ text: string; highlight: boolean }> = [{ text, highlight: false }]

    sortedPhrases.forEach(phrase => {
        const newParts: Array<{ text: string; highlight: boolean }> = []

        parts.forEach(part => {
            if (part.highlight) {
                // Don't highlight already highlighted parts
                newParts.push(part)
                return
            }

            const content = part.text
            const lowerText = content.toLowerCase()
            const lowerPhrase = phrase.toLowerCase()
            let lastIndex = 0
            let index = lowerText.indexOf(lowerPhrase, lastIndex)

            if (index === -1) {
                // Phrase not found, keep original part
                newParts.push(part)
                return
            }

            while (index !== -1) {
                // Add text before the match
                if (index > lastIndex) {
                    newParts.push({ text: content.slice(lastIndex, index), highlight: false })
                }

                // Add the highlighted match (using original case)
                newParts.push({ text: content.slice(index, index + phrase.length), highlight: true })

                lastIndex = index + phrase.length
                index = lowerText.indexOf(lowerPhrase, lastIndex)
            }

            // Add remaining text after last match
            if (lastIndex < content.length) {
                newParts.push({ text: content.slice(lastIndex), highlight: false })
            }
        })

        parts = newParts
    })

    return parts.map((part, index) =>
        part.highlight ? (
            <span key={index} className={highlightClassName}>
                {part.text}
            </span>
        ) : (
            <span key={index}>{part.text}</span>
        )
    )
}

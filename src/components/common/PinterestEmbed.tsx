import React from 'react'

interface PinterestEmbedProps {
  id: string
  height?: number | string
  width?: number | string
  title?: string
  className?: string
  aspectRatio?: string
}

export const PinterestEmbed: React.FC<PinterestEmbedProps> = ({
  id,
  height = '100%',
  width = '100%',
  title = 'ANIMESH JEWELS Fine Jewellery Demonstration',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-[#141012] border border-[#C8A45D]/50 shadow-2xl flex items-center justify-center ${className}`}
    >
      <iframe
        src={`https://assets.pinterest.com/ext/embed.html?id=${id}`}
        height={height}
        width={width}
        frameBorder="0"
        scrolling="no"
        title={title}
        className="w-full h-full block object-cover"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  )
}

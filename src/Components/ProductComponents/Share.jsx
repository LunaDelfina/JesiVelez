const InstagramLogo = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2334_329)">
                <path d="M9.9165 1.16669H4.08317C2.47234 1.16669 1.1665 2.47252 1.1665 4.08335V9.91669C1.1665 11.5275 2.47234 12.8334 4.08317 12.8334H9.9165C11.5273 12.8334 12.8332 11.5275 12.8332 9.91669V4.08335C12.8332 2.47252 11.5273 1.16669 9.9165 1.16669Z" stroke="#8B6E4E" stroke-opacity="0.75" stroke-width="0.875" />
                <path d="M6.99984 9.33335C8.2885 9.33335 9.33317 8.28868 9.33317 7.00002C9.33317 5.71136 8.2885 4.66669 6.99984 4.66669C5.71117 4.66669 4.6665 5.71136 4.6665 7.00002C4.6665 8.28868 5.71117 9.33335 6.99984 9.33335Z" stroke="#8B6E4E" stroke-opacity="0.75" stroke-width="0.875" />
                <path d="M10.2082 4.08333C10.3693 4.08333 10.4998 3.95275 10.4998 3.79167C10.4998 3.63058 10.3693 3.5 10.2082 3.5C10.0471 3.5 9.9165 3.63058 9.9165 3.79167C9.9165 3.95275 10.0471 4.08333 10.2082 4.08333Z" fill="#8B6E4E" fill-opacity="0.75" stroke="#8B6E4E" stroke-opacity="0.75" stroke-width="0.875" />
            </g>
            <defs>
                <clipPath id="clip0_2334_329">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

const ShareLogo = () => {
    return (

        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 4.66669C11.4665 4.66669 12.25 3.88319 12.25 2.91669C12.25 1.95019 11.4665 1.16669 10.5 1.16669C9.5335 1.16669 8.75 1.95019 8.75 2.91669C8.75 3.88319 9.5335 4.66669 10.5 4.66669Z" stroke="#8B6E4E" stroke-opacity="0.75" stroke-width="0.875" />
            <path d="M3.5 8.75C4.4665 8.75 5.25 7.9665 5.25 7C5.25 6.0335 4.4665 5.25 3.5 5.25C2.5335 5.25 1.75 6.0335 1.75 7C1.75 7.9665 2.5335 8.75 3.5 8.75Z" stroke="#8B6E4E" stroke-opacity="0.75" stroke-width="0.875" />
            <path d="M10.5 12.8333C11.4665 12.8333 12.25 12.0498 12.25 11.0833C12.25 10.1168 11.4665 9.33331 10.5 9.33331C9.5335 9.33331 8.75 10.1168 8.75 11.0833C8.75 12.0498 9.5335 12.8333 10.5 12.8333Z" stroke="#8B6E4E" stroke-opacity="0.75" stroke-width="0.875" />
            <path d="M5.01074 7.88082L8.99491 10.2025M8.98908 3.79749L5.01074 6.11915" stroke="#8B6E4E" stroke-opacity="0.75" stroke-width="0.875" />
        </svg>

    )
}



const Share = () => {
    return (
        <div className="flex w-full justify-end gap-3 uppercase tracking-[0.1em] text-xs font-bold mt-2">
            <div className="flex gap-2 justify-center content-center cursor-pointer">
                <InstagramLogo />
                Instagram
            </div>
            <div className="flex gap-2 justify-center content-center cursor-pointer">
                <ShareLogo />
                Compartir
            </div>


        </div>
    )
}
export default Share
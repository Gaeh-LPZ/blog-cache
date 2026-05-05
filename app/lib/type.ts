export interface Post {
    id: number,
    band_name: string,
    review: string,
    emoji: string,
    random_val: number,
    timestamp: string,
    user_id: number
}

export const images : Record<string, string> = {
    'Adam jensen': '/adam_jensen.jpg',
    'Dead Poet Society': '/dead_poet_society.jpg',
    'Edgehill': '/edgehill.jpg',
    'Gorillaz': '/gorillaz.jpg',
    'LISA': '/lisa.jpg',
    'Nothing But Thieves': '/nothin_but_thieves.jpg',
    'Radio Head': '/radiohead.jpg',
    'Sleep Token': '/sleep_token.jpg',
    'The Strokes': '/the_strokes.jpg',
    'Twenty One Pilots': '/twenty_one_pilots.jpg'
}

export const allowedEmojis = ["🎸", "🎤", "🤘", "🎺"];
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
    'Adam Jensen': '/adam_jensen.jpg',
    'Dead Poet Society': '/dead_poet_society.jpg',
    'Edgehill': '/edgehill.jpg',
    'Gorillaz': '/gorillaz.jpg',
    'Lisa': '/lisa.jpg',
    'Nothing But Thieves': '/nothing_but_thieves.jpg',
    'Radiohead': '/radiohead.jpg',
    'Sleep Token': '/sleep_token.jpg',
    'The Strokes': '/the_strokes.jpg',
    'twenty_one_pilots': '/twenty_one_pilots.jpg'
}
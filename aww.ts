export interface Root {
    kind: string
    data: Data
  }
  
  export interface Data {
    after: string
    dist: number
    modhash: string
    geo_filter: any
    children: Children[]
    before: any
  }
  
  export interface Children {
    kind: string
    data: Data2
  }
  
  export interface Data2 {
    approved_at_utc: any
    subreddit: string
    selftext: string
    author_fullname: string
    saved: boolean
    mod_reason_title: any
    gilded: number
    clicked: boolean
    title: string
    link_flair_richtext: any[]
    subreddit_name_prefixed: string
    hidden: boolean
    pwls: number
    link_flair_css_class?: string
    downs: number
    thumbnail_height: number
    top_awarded_type?: string
    hide_score: boolean
    name: string
    quarantine: boolean
    link_flair_text_color: string
    upvote_ratio: number
    author_flair_background_color?: string
    subreddit_type: string
    ups: number
    total_awards_received: number
    media_embed: MediaEmbed
    thumbnail_width: number
    author_flair_template_id: any
    is_original_content: boolean
    user_reports: any[]
    secure_media?: SecureMedia
    is_reddit_media_domain: boolean
    is_meta: boolean
    category: any
    secure_media_embed: SecureMediaEmbed
    link_flair_text: any
    can_mod_post: boolean
    score: number
    approved_by: any
    is_created_from_ads_ui: boolean
    author_premium: boolean
    thumbnail: string
    edited: boolean
    author_flair_css_class?: string
    author_flair_richtext: AuthorFlairRichtext[]
    gildings: Gildings
    post_hint?: string
    content_categories: any
    is_self: boolean
    mod_note: any
    created: number
    link_flair_type: string
    wls: number
    removed_by_category: any
    banned_by: any
    author_flair_type: string
    domain: string
    allow_live_comments: boolean
    selftext_html: any
    likes: any
    suggested_sort?: string
    banned_at_utc: any
    url_overridden_by_dest: string
    view_count: any
    archived: boolean
    no_follow: boolean
    is_crosspostable: boolean
    pinned: boolean
    over_18: boolean
    preview?: Preview
    all_awardings: AllAwarding[]
    awarders: any[]
    media_only: boolean
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text?: string
    treatment_tags: any[]
    visited: boolean
    removed_by: any
    num_reports: any
    distinguished: any
    subreddit_id: string
    author_is_blocked: boolean
    mod_reason_by: any
    removal_reason: any
    link_flair_background_color: string
    id: string
    is_robot_indexable: boolean
    report_reasons: any
    author: string
    discussion_type: any
    num_comments: number
    send_replies: boolean
    whitelist_status: string
    contest_mode: boolean
    mod_reports: any[]
    author_patreon_flair: boolean
    author_flair_text_color?: string
    permalink: string
    parent_whitelist_status: string
    stickied: boolean
    url: string
    subreddit_subscribers: number
    created_utc: number
    num_crossposts: number
    media?: Media
    is_video: boolean
    is_gallery?: boolean
    media_metadata?: MediaMetadata
    gallery_data?: GalleryData
    crosspost_parent_list?: CrosspostParentList[]
    crosspost_parent?: string
  }
  
  export interface MediaEmbed {}
  
  export interface SecureMedia {
    reddit_video: RedditVideo
  }
  
  export interface RedditVideo {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface SecureMediaEmbed {}
  
  export interface AuthorFlairRichtext {
    e: string
    t: string
  }
  
  export interface Gildings {
    gid_1?: number
    gid_2?: number
  }
  
  export interface Preview {
    images: Image[]
    enabled: boolean
  }
  
  export interface Image {
    source: Source
    resolutions: Resolution[]
    variants: Variants
    id: string
  }
  
  export interface Source {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution {
    url: string
    width: number
    height: number
  }
  
  export interface Variants {}
  
  export interface AllAwarding {
    giver_coin_reward?: number
    subreddit_id: any
    is_new: boolean
    days_of_drip_extension: number
    coin_price: number
    id: string
    penny_donate?: number
    award_sub_type: string
    coin_reward: number
    icon_url: string
    days_of_premium: number
    tiers_by_required_awardings?: TiersByRequiredAwardings
    resized_icons: ResizedIcon5[]
    icon_width: number
    static_icon_width: number
    start_date: any
    is_enabled: boolean
    awardings_required_to_grant_benefits?: number
    description: string
    end_date: any
    subreddit_coin_reward: number
    count: number
    static_icon_height: number
    name: string
    resized_static_icons: ResizedStaticIcon5[]
    icon_format?: string
    icon_height: number
    penny_price?: number
    award_type: string
    static_icon_url: string
  }
  
  export interface TiersByRequiredAwardings {
    "0": N0
    "9": N9
    "3": N3
    "6": N6
  }
  
  export interface N0 {
    resized_icons: ResizedIcon[]
    awardings_required: number
    static_icon: StaticIcon
    resized_static_icons: ResizedStaticIcon[]
    icon: Icon
  }
  
  export interface ResizedIcon {
    url: string
    width: number
    height: number
  }
  
  export interface StaticIcon {
    url: string
    width: number
    format: any
    height: number
  }
  
  export interface ResizedStaticIcon {
    url: string
    width: number
    height: number
  }
  
  export interface Icon {
    url: string
    width: number
    format: string
    height: number
  }
  
  export interface N9 {
    resized_icons: ResizedIcon2[]
    awardings_required: number
    static_icon: StaticIcon2
    resized_static_icons: ResizedStaticIcon2[]
    icon: Icon2
  }
  
  export interface ResizedIcon2 {
    url: string
    width: number
    height: number
  }
  
  export interface StaticIcon2 {
    url: string
    width: number
    format: any
    height: number
  }
  
  export interface ResizedStaticIcon2 {
    url: string
    width: number
    height: number
  }
  
  export interface Icon2 {
    url: string
    width: number
    format: string
    height: number
  }
  
  export interface N3 {
    resized_icons: ResizedIcon3[]
    awardings_required: number
    static_icon: StaticIcon3
    resized_static_icons: ResizedStaticIcon3[]
    icon: Icon3
  }
  
  export interface ResizedIcon3 {
    url: string
    width: number
    height: number
  }
  
  export interface StaticIcon3 {
    url: string
    width: number
    format: any
    height: number
  }
  
  export interface ResizedStaticIcon3 {
    url: string
    width: number
    height: number
  }
  
  export interface Icon3 {
    url: string
    width: number
    format: string
    height: number
  }
  
  export interface N6 {
    resized_icons: ResizedIcon4[]
    awardings_required: number
    static_icon: StaticIcon4
    resized_static_icons: ResizedStaticIcon4[]
    icon: Icon4
  }
  
  export interface ResizedIcon4 {
    url: string
    width: number
    height: number
  }
  
  export interface StaticIcon4 {
    url: string
    width: number
    format: any
    height: number
  }
  
  export interface ResizedStaticIcon4 {
    url: string
    width: number
    height: number
  }
  
  export interface Icon4 {
    url: string
    width: number
    format: string
    height: number
  }
  
  export interface ResizedIcon5 {
    url: string
    width: number
    height: number
  }
  
  export interface ResizedStaticIcon5 {
    url: string
    width: number
    height: number
  }
  
  export interface Media {
    reddit_video: RedditVideo2
  }
  
  export interface RedditVideo2 {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface MediaMetadata {
    "14i0ule1wqc81": N14i0ule1wqc81
    xq59jle1wqc81: Xq59jle1wqc81
    ln2mfle1wqc81: Ln2mfle1wqc81
  }
  
  export interface N14i0ule1wqc81 {
    status: string
    e: string
    m: string
    p: P[]
    s: S
    id: string
  }
  
  export interface P {
    y: number
    x: number
    u: string
  }
  
  export interface S {
    y: number
    x: number
    u: string
  }
  
  export interface Xq59jle1wqc81 {
    status: string
    e: string
    m: string
    p: P2[]
    s: S2
    id: string
  }
  
  export interface P2 {
    y: number
    x: number
    u: string
  }
  
  export interface S2 {
    y: number
    x: number
    u: string
  }
  
  export interface Ln2mfle1wqc81 {
    status: string
    e: string
    m: string
    p: P3[]
    s: S3
    id: string
  }
  
  export interface P3 {
    y: number
    x: number
    u: string
  }
  
  export interface S3 {
    y: number
    x: number
    u: string
  }
  
  export interface GalleryData {
    items: Item[]
  }
  
  export interface Item {
    media_id: string
    id: number
  }
  
  export interface CrosspostParentList {
    approved_at_utc: any
    subreddit: string
    selftext: string
    author_fullname: string
    saved: boolean
    mod_reason_title: any
    gilded: number
    clicked: boolean
    title: string
    link_flair_richtext: LinkFlairRichtext[]
    subreddit_name_prefixed: string
    hidden: boolean
    pwls: number
    link_flair_css_class?: string
    downs: number
    thumbnail_height: number
    top_awarded_type: any
    hide_score: boolean
    name: string
    quarantine: boolean
    link_flair_text_color: string
    upvote_ratio: number
    author_flair_background_color?: string
    ups: number
    total_awards_received: number
    media_embed: MediaEmbed2
    thumbnail_width: number
    author_flair_template_id?: string
    is_original_content: boolean
    user_reports: any[]
    secure_media: SecureMedia2
    is_reddit_media_domain: boolean
    is_meta: boolean
    category: any
    secure_media_embed: SecureMediaEmbed2
    link_flair_text?: string
    can_mod_post: boolean
    score: number
    approved_by: any
    is_created_from_ads_ui: boolean
    author_premium: boolean
    thumbnail: string
    edited: boolean
    author_flair_css_class: any
    author_flair_richtext: AuthorFlairRichtext2[]
    gildings: Gildings2
    post_hint: string
    content_categories: any
    is_self: boolean
    subreddit_type: string
    created: number
    link_flair_type: string
    wls: number
    removed_by_category: any
    banned_by: any
    author_flair_type: string
    domain: string
    allow_live_comments: boolean
    selftext_html: any
    likes: any
    suggested_sort: any
    banned_at_utc: any
    url_overridden_by_dest: string
    view_count: any
    archived: boolean
    no_follow: boolean
    is_crosspostable: boolean
    pinned: boolean
    over_18: boolean
    preview: Preview2
    all_awardings: AllAwarding2[]
    awarders: any[]
    media_only: boolean
    link_flair_template_id?: string
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text?: string
    treatment_tags: any[]
    visited: boolean
    removed_by: any
    mod_note: any
    distinguished: any
    subreddit_id: string
    author_is_blocked: boolean
    mod_reason_by: any
    num_reports: any
    removal_reason: any
    link_flair_background_color: string
    id: string
    is_robot_indexable: boolean
    report_reasons: any
    author: string
    discussion_type: any
    num_comments: number
    send_replies: boolean
    whitelist_status: string
    contest_mode: boolean
    mod_reports: any[]
    author_patreon_flair: boolean
    author_flair_text_color?: string
    permalink: string
    parent_whitelist_status: string
    stickied: boolean
    url: string
    subreddit_subscribers: number
    created_utc: number
    num_crossposts: number
    media: Media2
    is_video: boolean
  }
  
  export interface LinkFlairRichtext {
    e: string
    t: string
  }
  
  export interface MediaEmbed2 {}
  
  export interface SecureMedia2 {
    reddit_video: RedditVideo3
  }
  
  export interface RedditVideo3 {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface SecureMediaEmbed2 {}
  
  export interface AuthorFlairRichtext2 {
    e: string
    t: string
  }
  
  export interface Gildings2 {
    gid_1?: number
  }
  
  export interface Preview2 {
    images: Image2[]
    enabled: boolean
  }
  
  export interface Image2 {
    source: Source2
    resolutions: Resolution2[]
    variants: Variants2
    id: string
  }
  
  export interface Source2 {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution2 {
    url: string
    width: number
    height: number
  }
  
  export interface Variants2 {}
  
  export interface AllAwarding2 {
    giver_coin_reward?: number
    subreddit_id: any
    is_new: boolean
    days_of_drip_extension: number
    coin_price: number
    id: string
    penny_donate?: number
    award_sub_type: string
    coin_reward: number
    icon_url: string
    days_of_premium: number
    tiers_by_required_awardings: any
    resized_icons: ResizedIcon6[]
    icon_width: number
    static_icon_width: number
    start_date: any
    is_enabled: boolean
    awardings_required_to_grant_benefits: any
    description: string
    end_date: any
    subreddit_coin_reward: number
    count: number
    static_icon_height: number
    name: string
    resized_static_icons: ResizedStaticIcon6[]
    icon_format?: string
    icon_height: number
    penny_price?: number
    award_type: string
    static_icon_url: string
  }
  
  export interface ResizedIcon6 {
    url: string
    width: number
    height: number
  }
  
  export interface ResizedStaticIcon6 {
    url: string
    width: number
    height: number
  }
  
  export interface Media2 {
    reddit_video: RedditVideo4
  }
  
  export interface RedditVideo4 {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
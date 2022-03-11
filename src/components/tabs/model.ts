class TabName {
    public static readonly Home = new TabName("Home")
    public static readonly Posts = new TabName("Posts")
    public static readonly Archive = new TabName("Archive")

    name: string
    private constructor(_name: string) {
        this.name = _name
    }
    static values() {
        return [TabName.Home, TabName.Posts, TabName.Archive]
    }
    static valueOf(_name: string) {
        if (_name == TabName.Home.name) {
            return TabName.Home
        } else if (_name == TabName.Posts.name) {
            return TabName.Posts
        } else if (_name == TabName.Archive.name) {
            return TabName.Archive
        }
        throw Error(`${_name}不是TabName类型`)
    }
}
export { TabName }
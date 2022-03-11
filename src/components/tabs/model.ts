/* eslint-disable @typescript-eslint/no-explicit-any */
import Home from "@/components/tabs/Home.vue"
import Posts from "@/components/tabs/Posts.vue"
import Archive from "@/components/tabs/Archive.vue"

class TabName {
    public static readonly Home = new TabName("Home", () => Home)
    public static readonly Posts = new TabName("Posts", () => Posts)
    public static readonly Archive = new TabName("Archive", () => Archive)

    name: string
    component: () => any
    private constructor(_name: string,_component: ()=>any) {
        this.name = _name
        this.component = _component
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
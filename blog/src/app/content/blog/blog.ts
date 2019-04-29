export interface BlogInterface {
    title: string;
    context: string;
    date: Date;
    photoUrl: string;
}


export class Blog implements BlogInterface {
    private _title: string;
    private _context: string;
    private _date: Date;
    private _photoUrl: string;

    /**
     * Getter title
     * @return {string}
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Getter context
     * @return {string}
     */
    public get context(): string {
        return this._context;
    }

    /**
     * Getter date
     * @return {Date}
     */
    public get date(): Date {
        return this._date;
    }

    /**
     * Getter photoUrl
     * @return {string}
     */
    public get photoUrl(): string {
        return this._photoUrl;
    }

    /**
     * Setter title
     * @param {string} value
     */
    public set title(value: string) {
        this._title = value;
    }

    /**
     * Setter context
     * @param {string} value
     */
    public set context(value: string) {
        this._context = value;
    }

    /**
     * Setter date
     * @param {Date} value
     */
    public set date(value: Date) {
        this._date = value;
    }

    /**
     * Setter photoUrl
     * @param {string} value
     */
    public set photoUrl(value: string) {
        this._photoUrl = value;
    }

    /**
     * getter all properties
     * @return {BlogInterface} value
     */
    public getProperties(): BlogInterface {
        return {
            title: this.title,
            context: this.context,
            date: this.date,
            photoUrl: this.photoUrl
        };
    }

    /**
     * Setter all properties
     * @param BlogInterface
     */
    public setProperties(blog: BlogInterface) {
        if (blog) {
            this.title = blog.title ? blog.title : this.title;
            this.context = blog.context ? blog.context : this.context;
            this.date = blog.date ? blog.date : this.date;
            this.photoUrl = blog.photoUrl ? blog.photoUrl : this.photoUrl;
        }
    }

}

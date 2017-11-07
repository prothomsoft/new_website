import Link from 'next/link'
import NProgress from 'nprogress'
import FontFaceObserver from 'fontfaceobserver'

export default class FontLoader extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {        
        let link = document.createElement('link')
        link.href = 'https://fonts.googleapis.com/css?family=Oswald:400&subset=latin,latin-ext'
        link.rel = 'stylesheet'
        document.head.appendChild(link)

        Promise.all([
            new FontFaceObserver('Oswald').load(),            
        ]).then(() => {
            this.props.triggerParentUpdateFontLoadedState();
        }, err => {
            console.error('Failed to load fonts!', err)            
        })
    }

    render() {       
        return (
            <div></div>
        );
    }
}
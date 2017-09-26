import Link from 'next/link'

export default () => (
    <header>
        <div className="caption">
            <span className="border">
                <Link href='/'><a>Home</a></Link> &nbsp; <Link href='/blog'><a>Blog</a></Link>
            </span>
        </div>

        <style jsx>{`
        .caption {
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            text-align: center;
            color: #000;
        }

        .caption span.border {
            background-color: #FFF;
            color: #fff;
            padding: 18px;
            font-size: 25px;
            letter-spacing: 10px;
        }
        `}</style> 
    </header>
  )
export default ({children, property}) => (
  <footer>
      
      <div className="caption">
            <p>FOOTER</p>
            <p>This is how we can pass children up the tree: {children}<br/>This is how we can pass property up the tree: {property}</p>    
      </div>
      
      <style jsx>{`
        .caption {
            color:#777;background-color:white;text-align:center;padding:50px 80px;text-align: justify;
        }
        `}</style>

  </footer>
)




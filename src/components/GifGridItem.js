
export const GifGridItem = ({ title, url }) => {

    return (
        
        <div className="card animate__animated animate__fadeInDown">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
// funciona
// export const GifGridItem = ({img}) => {

//     return (
//         // <div> o <li>
//         <li className="card">
//             <p>{img.title}</p>
//             <img src={img.url} alt={img.title} />
//         </li>
//     )
// }

import Link from 'next/link';

const Imagem = (props) => (
    <div className={props.classes} data-img={props.img}>
        <img src={props.img} />
	</div>
);

export default Imagem;
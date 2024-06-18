import './Footer.css'

const Footer = () => {
    return ( 
        <section className='footer fundo' >
                <ul className='list-icons'>
                    <li>
                        <a className='icon' href='https://www.facebook.com/'>
                            <img src='/imagens/fb.png' />
                        </a>
                    </li>
                    <li>
                        <a className='icon' href='https://twitter.com/'>
                            <img src='/imagens/tw.png'/>
                        </a>
                    </li>
                    <li>
                        <a className='icon' href='https://www.instagram.com/'>
                            <img src='/imagens/ig.png' />
                        </a>    
                    </li>
                </ul>
            <img className='icon-organo' src='/imagens/logo.png' />
            <h1>
            Desenvolvido por Alura.
            </h1>
        </section>
    )
}

export default Footer
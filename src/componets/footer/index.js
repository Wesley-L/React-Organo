import './Footer.css'

const Footer = () => {
    return ( 
        <section className='footer fundo' >
                <ul className='list-icons'>
                    <li>
                        <a className='icon' href='https://www.facebook.com/'>
                            <img alt='' src='/imagens/fb.png' />
                        </a>
                    </li>
                    <li>
                        <a className='icon' href='https://twitter.com/'>
                            <img alt='' src='/imagens/tw.png'/>
                        </a>
                    </li>
                    <li>
                        <a className='icon' href='https://www.instagram.com/'>
                            <img alt='' src='/imagens/ig.png' />
                        </a>    
                    </li>
                </ul>
            <img alt='' className='icon-organo' src='/imagens/logo.png' />
            <h1>
            Desenvolvido por Alura.
            </h1>
        </section>
    )
}

export default Footer
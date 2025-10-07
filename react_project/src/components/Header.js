import logo from '../images/котик.png'

export default function Header()
{
    const now = new Date()
    return (
        <header className='App-header'>
            <img src={logo} alt="" style={{ width: '800px', height: '800px' }} />

            <h3>Wow</h3>
            
            <span>Время: {now.toLocaleTimeString()}</span>
        </header>
    )
}
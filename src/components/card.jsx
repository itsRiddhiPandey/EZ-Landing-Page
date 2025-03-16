import Title from './title';
import Text from './text';
const Card = ({ imagePath, heading, text }) => {
    return (
        <div className='teaser'>
            <div className='cmp-teaser'>
                <div className='cmp-teaser__head'>
                    <img src={`/assets/${imagePath}.png`} alt={heading} />
                    <Title heading={heading} />
                </div>
                <Text text={text} />
            </div>
        </div>
    )
}
export default Card;
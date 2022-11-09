import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react"
import moment from "moment"
import styles from './styles/Card.module.css';


type CardProps = {
    title?: string | JSX.Element;
    content: string | JSX.Element;
    subtitle?: string | JSX.Element;
}

const Card = ({
    title,
    content,
    subtitle,
}: CardProps) => {
    return (
        <IonCard color='secondary'>
            <IonCardHeader>
                <IonCardTitle>{title ? title : 'Storyy'}</IonCardTitle>
                <IonCardSubtitle>
                    {subtitle ? subtitle : moment().format('MMMM Do YYYY, h:mm:ss a')}
                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                {content}
            </IonCardContent>
        </IonCard>
    )
}

export default Card;
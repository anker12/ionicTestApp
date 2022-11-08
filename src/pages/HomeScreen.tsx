import { IonButton, IonContent, IonPage } from "@ionic/react";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import signUp from "../utils/signUp";

const HomeScreen: React.FC  = () => (
    <IonPage>
        <TopBar title='Home' slot='fixed' />
        <IonContent>
            <Card
                title="First card?"
                content={'Gaming B)'} />
            <Card
                title="Second card?"
                content={(
                    <div>
                        <IonButton
                            onClick={() => signUp()}
                        >
                            Click me    
                        </IonButton>
                    </div>
                )} 
            />
            <Card
                title="Third card?"
                content={'Gaming B)'} 
            />
            <Card
                title="Fourth card?"
                subtitle={'Nested cards'}
                content={(
                    <>
                        <Card
                            content={'Nested card 1'} />
                        <Card
                            content={'Nested card 2'} />
                    </>
                )} />
        </IonContent>
    </IonPage>
)

export default HomeScreen

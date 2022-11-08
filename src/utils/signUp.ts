import { createClient } from '@supabase/supabase-js'


const supabase = createClient(`${process.env.REACT_APP_API_URL}`, `${process.env.REACT_APP_API_KEY}`);

const signUp = async () => {

    const { session, error } = await supabase.auth.signUp({
        email: 'example@email.com',
        password: 'example-password',
    });
    console.log(error);
    // console.log('User: ', user, 'session: ', session, error);
    console.log(process.env.REACT_APP_SUPABASE_KEY);

    if (!error && !session) {
        const { user, session, error } = await supabase.auth.signIn({
            email: 'example@email.com',
            password: 'example-password',
        });
        console.log(error);
        console.log('user:', user, 'session: ', session);
    }
}

export default signUp;

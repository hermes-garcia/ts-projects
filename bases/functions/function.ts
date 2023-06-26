(() => {

    const hero: string = 'Flash';

    function returnHero(): string {
        return hero;
    }

    const enableBatSignal = ():string => {
        return 'Batsignal enabled!';
    }

    const heroName = returnHero();


})()
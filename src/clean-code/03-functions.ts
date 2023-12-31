(() => {
    function getMovieById( id: number ) {
        console.log({ id });
    }

    function getMovieCastById( id: number ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }

    interface Movie {
        title:          string;
        description:    string;
        rating:         number;
        cast:           string[];
    }
    
    function postMovie({title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    function checkActorName( fullName: string) {
        console.log({ fullName });
        return true;
    }
    
    function postActor( fullName: string, birthDate: Date ): boolean {
        
        if ( checkActorName(fullName) ) return false;

        console.log('Create actor', birthDate);
        return true;        
    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if ( isDead ) return  1500; 
        
        if ( isSeparated ) return 2500; 

        return isRetired ? 3000 : 4000;      
    }
})();
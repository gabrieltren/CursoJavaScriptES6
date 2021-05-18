(() => {
    this.name = 'Nome no contexto de criacao';
    
    const getNameArrowFn = () => this.name;
    
    function getName() {
        return this.name;
    }

    const user = {
        namename: 'nome no objeto de execução',
        getNameArrowFn,
        getName
    }
    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();

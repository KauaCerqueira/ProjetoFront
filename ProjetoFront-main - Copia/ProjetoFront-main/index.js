function enviarForm(){
    var inputCPF = document.getElementById("cpf");

    if(validarCPF(inputCPF.value)) {
        alert("Válido");
        inputCPF.classList.remove("erro");
    } else{
        alert("Inválido");
        inputCPF.focus()
        inputCPF.classList.add("erro");
    }
}

function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}
                    const firstDiv = document.querySelector('.first-step');
                    const secondDiv = document.querySelector('.second-step');
                    const finalDiv = document.querySelector('.final-step');
        
                    function go(currentStep,nextStep)
                    {
                        let dNone, dBlock;
                        if(currentStep == 1)
                        {
                            dNone = firstDiv;
                        }
                        else if(currentStep == 2)
                        {
                            dNone = secondDiv;
                        }
                        else
                        {
                            dNone = finalDiv;
                        }

                        dNone.style.display = 'none';

                        if(nextStep == 1)
                        {
                            dBlock = firstDiv;
                        }
                        else if(nextStep == 2)
                        {
                            dBlock = secondDiv;
                        }
                        else
                        {
                            dBlock = finalDiv;
                        }
                        dBlock.style.display = 'block';
                    }

                    function validate()
                    {
                        const peso   = document.getElementById('peso');
                        const altura = document.getElementById('altura');
                        peso.style.border   = 'none';
                        altura.style.border = 'none';
                        if(!peso.value || !altura.value)
                        {
                            if(!peso.value && !altura.value)
                            {
                                peso.style.border = '1px solid red';
                                altura.style.border = '1px solid red';
                            }
                            else if(!peso.value)
                            {
                                peso.style.border = '1px solid red';
                            }
                            else
                            {
                                altura.style.border = '1px solid red';
                            }
                        }
                        else
                        {
                            let imc = peso.value / (altura.value * altura.value);
                            const result = document.getElementById('resultado');
                            if(imc < 18.5)
                            {
                                console.log('Magreza | Obesidade: 0');
                                result.style.color = 'yellow';
                                result.innerHTML = 'Magreza | Obesidade: 0 | '+ imc.toFixed(2);
                            }
                            else if(imc >= 18.5 && imc < 25)
                            {
                                console.log('Normal | Obesidade: 0');
                                result.style.color = 'black';
                                result.innerHTML = 'Normal | Obesidade: 0 | '+ imc.toFixed(2);
                            }
                            else if(imc >= 25 && imc < 30)
                            {
                                console.log('Sobrepeso | Obesidade: I');
                                result.style.color = 'yellow';
                                result.innerHTML = 'Sobrepeso | Obesidade: I | '+ imc.toFixed(2);
                            }
                            else if(imc >= 30 && imc < 40)
                            {
                                console.log('Obesidade | Obesidade: II');
                                result.style.color = 'red';
                                result.innerHTML = 'Obesidade | Obesidade: II | '+ imc.toFixed(2);
                            }
                            else
                            {
                                console.log('Obesidade grave | Obesidade: III');
                                result.style.color = 'black';
                                result.innerHTML = 'Obesidade grave | Obesidade: III | '+ imc.toFixed(2);
                            }
                            go(2,3);
                        }
                    }
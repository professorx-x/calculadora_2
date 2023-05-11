import React from 'react';

import '../css/buttons_calc.css';
// import Display from './display';

// var func_array = Array();
var func_array = [];

export default class func_bot extends React.Component
{
    state = 
    {
        carac: this.props.carac,
        tipo: this.props.tipo
    }

    
    setFuncao(e)
    {
        const carac = this.state.carac;
        const tipo = this.state.tipo;

        const pri_display = document.querySelector('#pri_display');
        const sec_display = document.querySelector('#sec_display');

        if(carac === "AC")
        {
            sec_display.innerHTML = "";
            pri_display.value = "0";
            func_array = Array();
        }
        else if(func_array.length === 0)
        {
            if(tipo !== "num")
            {
                sec_display.innerHTML = "Nao e numero";
            }
            else
            {
                sec_display.innerHTML = "";
                pri_display.value = carac;
                func_array.push(parseInt(carac));
            }
        }
        else
        {
            let caracter = "";
            let msg = "";
            let finalizar = false;

            if(tipo === "num")
            {
                func_array.push(parseInt(carac));    
            }
            else
            {
                func_array.push(carac);
            }

            var str_display = "";
        
            for (let index = 0; index < func_array.length; index++) 
            {
                let pen_element = 0;

                if(index > 0)
                {
                    pen_element = func_array[index - 1];
                }

                let element = func_array[index];

                if( (typeof(pen_element) != "number") && (typeof(element) != "number") )
                {
                    msg = "Nao coloque dois sinais juntos";
                }
                else if( (typeof(pen_element) == "number") && (typeof(element) == "number") )
                {
                    str_display = str_display + element;
                }
                else
                {
                    str_display = str_display + " " + element;
                    
                    if(element == "=")
                    {
                        finalizar = true;
                    }
                }
            }


            if(finalizar === true )
            {
                let resultado = 0;
                let form_string_int = "";
                let new_str_display = Array();

                for(let i = 0; i < func_array.length; i++)
                {
                    let elemnt = func_array[i];
                    
                    if(typeof(elemnt) === "number" )
                    {
                        form_string_int = form_string_int + elemnt;
                    }
                    else if( i === (func_array.length - 1))
                    {
                        new_str_display.push( parseInt(form_string_int) );
                    }
                    else
                    {
                        new_str_display.push( parseInt(form_string_int) );
                        form_string_int = "";
                        new_str_display.push( elemnt );
                    }
                }


                // let multi_div = ["*", "/"];
                // let find_pri_oper = false;
                // let new_str_display_2 = Array();
                
                console.log(new_str_display);

                for(let i = 0; i < new_str_display.length; i++)
                {
                    if(new_str_display[i] === "*")
                    {
                        let new_element = new_str_display[i - 1] * new_str_display[i + 1];
                        resultado = new_element;  
                        console.log(resultado);
                        new_str_display_2.splice((i - 1), 1, new_element);
                        let new_str_display_2_part = new_str_display.splice( (i + 2) );
                        new_str_display = new_str_display_2.concat(new_str_display_2_part);
                        new_str_display_2 = [];
                        i = -1;

                        console.log(new_str_display);
                    }
                    else if(new_str_display[i] === "/")
                    {
                        let new_element = new_str_display[i - 1] / new_str_display[i + 1];
                        resultado = new_element;  
                        console.log(resultado);
                        new_str_display_2.splice((i - 1), 1, new_element);
                        let new_str_display_2_part = new_str_display.splice( (i + 2) );
                        new_str_display = new_str_display_2.concat(new_str_display_2_part);
                        new_str_display_2 =´[];
                        i = -1;

                        console.log(new_str_display);
                    }
                    else
                    {
                        new_str_display_2.push(new_str_display[i]);
                    }
                }

                new_str_display = new_str_display_2;
                new_str_display_2 = [];

                for(let i = 0; i < new_str_display.length; i++)
                {
                    if(new_str_display[i] === "+")
                    {
                        let new_element = new_str_display[i - 1] + new_str_display[i + 1];
                        resultado = new_element;  
                        new_str_display_2.splice((i - 1), 1, new_element);
                        let new_str_display_2_part = new_str_display.splice( (i + 2) );
                        new_str_display = new_str_display_2.concat(new_str_display_2_part);
                        new_str_display_2 = [];
                        i = -1;

                        console.log(new_str_display);
                    }
                    else if(new_str_display[i] === "-")
                    {
                        let new_element = new_str_display[i - 1] - new_str_display[i + 1];
                        resultado = new_element;  
                        new_str_display_2.splice((i - 1), 1, new_element);
                        let new_str_display_2_part = new_str_display.splice( (i + 2) );
                        new_str_display = new_str_display_2.concat(new_str_display_2_part);
                        new_str_display_2 = Array();
                        i = -1;

                        console.log(new_str_display);
                    }
                    else
                    {
                        new_str_display_2.push(new_str_display[i]);
                    }
                }

                str_display = resultado;
            }


            pri_display.value = str_display;
            sec_display.innerHTML = msg;
        }
    }


    render()
    {
        const carac = this.state.carac;
        const tipo = this.state.tipo + "_button";
    
        return <button className={tipo} onClick={ (e) => this.setFuncao(e) }> {carac} </button>;
    }
}



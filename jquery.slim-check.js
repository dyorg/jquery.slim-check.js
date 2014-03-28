 /**
 * jquery.slim-check.js
 * 
 * @version: v0.1
 * @author: Dyorg Washington G. de Almeida
 * @copyright Dyorg Washington G. de Almeida 2014
 * @link http://dyorg.github.com/jquery.slim-check.js/
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

(function($){

    $.fn.slimCheck = function() {
        return this.each(function(){
        	addLabel(this, getId(this));
        	$(this).addClass('slim-check');
        });
    };
	
	var addLabel = function(e, id){
		 if($(e).next().length == 0 || $(e).next().get(0).tagName != "LABEL"){
			 $(e).after('<label for="'+id+'"></label>');
		 }
	};
	
	var getId = function(e){
		var id = $(e).attr('id');
		 
		if(typeof id == "undefined") {
			id = 'check_' + Math.floor(Math.random()*999999999);
			$(e).attr('id', id);
		}
		 
		return id;
	};
	
})(jQuery); 


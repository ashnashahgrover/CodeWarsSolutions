# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
#
# Examples
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !

def pig_it(text):
    text = text.split(" ")
    new_text = []
    for i in text:
        if (i=="!" or i=="?"):
            new_text.append(i)
        else:
            i = i+i[0]+"ay"
            i = i[1:]
            new_text.append(i)
    return " ".join(new_text)

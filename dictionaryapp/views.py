# views.py
from django.shortcuts import render
from .models import Word

def index(request):
    query = request.GET.get('query', '')
    query = query.strip()
    result = None
    
    if query:
        # Use exact match to find words that exactly match the query
        try:
            result = Word.objects.get(word__iexact=query)
        except Word.DoesNotExist:
            result = None

    return render(request, 'bangla.html', {'query': query, 'result': result})








#
# views.py
#from django.shortcuts import render
#from .models import Word

#def word_list(request):
  #  all_words = Word.objects.all().order_by('word')
 #   grouped_words = {}

  #  for word in all_words:
    #    first_char = word.word[0].upper()
#        if first_char not in grouped_words:
     #       grouped_words[first_char] = []
#        grouped_words[first_char].append(word)

  #  return render(request, 'word_list.html', {'grouped_words': grouped_words})
#
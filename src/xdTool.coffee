makeConnect =
    common:
        url: ''
        readstate: ''
        complete: ->
            console.log('loaded')
    init: (query) ->
        if query 
            this.common['url'] = this.common['url'] + '?' + query + '=' + query + "callback=cb"
        else 
            this.common['url'] = this.common['url']
        head = document.getElementsByTagName('head')[0]
        script = document.createElement('script')
        script.type = 'text/javascript'

        script.onreadystatechange = () ->
            this.common['readstate'] = this.readyState
            console.log(this.common['readstate'])

        script.onload = () ->
            this.common[complete]

        script.src = this.common['url']
        head.appendChild(script)
        return

cb = (data) ->
    console.log(data)
    return

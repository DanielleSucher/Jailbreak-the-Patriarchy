Chrome extension to swap gendered pronouns and other terms throughout web browsing. 

It also adds a "toggle patriarchy" browser action button that reloads the current tab and pauses/unpauses the extension.

***

Known issues:

- Since "her" can be a possessive or objective pronoun, ometimes “her” should translate to “him”, and sometimes it should translate to “his”. Rather than run every node update through some sort of natural language parser, I set up regular expressions with a set of rules that recognize the most common cases where “her” always or usually should translate to “him”, and then one that translates all remaining instances of “her” to “his” instead. What this ultimately means is that sometimes you’re going to see “his” where you really ought to see “him” instead, or vice-versa. If anyone has suggestions on improving this, I'd love to hear them!

- It doesn't include words like "mum", "fellow", "mister", &c, that are often used in entirely non-gendered ways (e.g. "mum's the word", "my fellow americans", "perfume mister"). I haven't thought up a good way around that [yet].

- Some folks say it doesn't work on reddit, others say that it does. It works on reddit for me. More testing and possibly tweaking here.

- If someone else wants to get around to making a Firefox version before I do, please feel free. Ditto the gender-neutral version a few folks have asked for.

***

Contributions are very welcome. 

I have a formal license attached, but basically it comes down to this - absolutely do feel free to create stuff based on this, but just please give me credit if you do. Thanks!

***

If you'd just like to use the extension, you can install it automatically:
https://chrome.google.com/webstore/detail/fiidcfoaaciclafodoficaofidfencgd

More information:
http://www.daniellesucher.com/2011/11/jailbreak-the-patriarchy-my-first-chrome-extension/
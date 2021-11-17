---
layout: index.njk
description: Two days of conferences around computer security, followed by a CTF.
---

<h2 id="intro">Presentation</h2>

The Toulouse Hacking Convention (or THCon) is a cybersecurity conference that brings together hobbyists, professionals and researchers!

Since its creation in 2017, the THCon was held every year in Toulouse, France.
Today, it is an unmissable cybersecurity event in Occitania, and beyond.

<div class="text-and-image"><div class="text">

### Who are we?

Behind the THCon stands a team of security enthusiasts, investing their energy together to create a major cybersecurity event, open to everyone.

Our team is made of professionals, students and researchers from all over France, **willing to share their knowledge with others**.

Interested in joining the adventure? Please contact us, we would be very happy to hear from you!

</div>
<div class="image"><img src="url:~/resources/team.jpg?width=960&as=webp" alt="The team behing the THCon 2020"></div>
</div>

<h2 id="thisedition">The 2022 edition</h2>

As you may know, we weren't able to organise an in-person event last year due to health restrictions.

You were numerous to admire the works of the speakers through the livestream, and while **the last edition was a formidable event** thanks to all the great talks and our awesome team, we missed engaging with people, and we are quite sure you did too.

This is why we are very happy to announce that **the 6th edition** of your favorite cybersecurity conference **is on track**, and that it will be **in-person**!

But that's not all, far from it.

## Merging with the INSA security day

We are extremely pleased to anounce that this year **the THCon merges with the [INSA security conference «Nouvelles Avancées en Sécurité des Systèmes d'Information»](http://wwwperso.insa-toulouse.fr/~nicomett/SECU/)**.

This will allow us to offer you an exceptional two-day event, more ambitious in its scope, with twice as many talks as before!

We would like to thank them very much for the great work they have been doing so far and we want to say we are thrilled to work with them.

<h2 id="cfp">Call For Papers</h2>

If you want to give a talk, we will soon open the "Call For Papers" (CFP) phase (around the beginning in december).

A CFP means that we will review a preliminary version of your paper/presentation to select the most promising presentations (we can only organise a limited number of talks in two days, so please understand that we cannot accept all the talks, and we will have to make some hard choices).
But do not despair, because the talks of this edition will last two days, so you now have twice as many chances as before to get your talk accepted ;)


If you have some project brewing, keep calm and send us something!

<p style="font-size:1.5em;"><strong>All the details are listed on the <a href="./cfp/#intra">CFP page</a>.</strong></p>

<h2 id="ctf">The CTF</h2>

Additionally, because we felt that it worked well last year (we saw over a thousand participants), we will also organise a "Capture The Flag" competition this year.

In that competition, players have to put their hacking skills into practice to **solve cybersecurity challenges**, like exploiting a flaw in a website, extracting data embedded in a memory image, finding vulnerabilities in an encryption protocol and much more… The resolution of each challenge gives you a "flag", a password needed to win points. The goal, as you might have guessed, is simply to score as much points as possible.

The winning teams will **win fancy prizes** such as hacker equipment, t-shirts and many other surprises!

As usual, this CTF will take place during the week-end that follows the talks, and will be available online for free.
To put a cherry on the cake, this year will also feature a **parallel in-person CTF** in which you will be able to impress us with your secret **hardware hacking** talents.

**Additional information will be coming soon, stay tuned!**

In the meantime, if you want to contribute by working with us to provide new challenges, we would be pleased to hear from you.


<!--
→ <a href="https://ctf.thcon.party/" class="_beautiful-link">Read more on the dedicated website.</a>
-->

## Dates & Access

The event will be held on **14/15th April, 2022** and will be located on the **ENAC campus in Toulouse**.

<link rel="stylesheet" href="~/resources/leaflet/leaflet.css" />

<div id="map" class="map map-home" style="height: 40em;"></div>

<script src="~/resources/leaflet/leaflet.js"></script>
<script>
	var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});

	var map = L.map('map', {center:[43.592824856091184, 1.438865661621094], zoom: 11.5}).addLayer(osm);

	L.marker([43.565156, 1.479281])
		.addTo(map)
		.bindPopup('<strong>ENAC Toulouse</strong>, the host of the next edition')
		.openPopup();
</script>


## COVID Restrictions

We currently plan to let anyone to come on-site. The health pass ("passe sanitaire") or equivalent and a mask will be mandatory to attend the conferences / the CTF and any other activity.

Please keep in mind the restrictions may change depending on the health situation in April. We will do our best to keep everyone updated.

<h2 id="schedule">Schedule</h2>

The schedule is not yet available, because we are currently in the paper submission phase.

If you want to present something, please refer to the [CFP section](#cfp).

<h2 id="news">News</h2>

Stay tuned for more!

If you want to follow us or interact with us, we're present on many social networks, not only Twitter.

Scroll down to the footer to pick your favorite poison.

<a class="twitter-timeline" data-height="500" data-dnt="true" data-theme="light" href="https://twitter.com/ToulouseHacking?ref_src=twsrc%5Etfw" style="display: block; height: 500px; background: #ccc; line-height: 500px; text-align: center;">Tweets by @ToulouseHacking</a>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<h2 id="sponsors">Sponsors</h2>

Interested in sponsoring us for the 2022 edition?

Please reach us with the contact details in the footer below, we are impatient to hear from you!
<!--
{% include "sponsors.njk" %}
-->

<!--
## Interested?

Pre-register for free!

<p class="_center"><a href="{{ links.tickets }}" class="button-link">Pre-register</a></p>
-->

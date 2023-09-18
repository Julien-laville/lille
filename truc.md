# <p style="text-align: center;">Test</p>


```mermaid
---
title: Evolution Tree
---
  flowchart TD
      start([Canard PC]) --> evol{{evolutions}}
      evol == LVL 1-7 ==> twitch([Twitch])
      evol  == LVL 1-5 ==>  editors([Editors])
      evol --> web([Web])
      web --> shop{{market}}
      web --> eventsWeb{{Random events}}
      eventsWeb{{Random events}} --> hs([Hors Series])
      eventsWeb{{Random events}} --> crowdfunding([Crowdfunding])
      shop  == LVL 1-3 ==> goodies([goodies])
      shop --> hardware([CPC hardware])
      twitch ==>  eventsTwitch{{Random events}}
      twitch == LVL 1-3 ==>   modos([Moderators])
      eventsTwitch{{Random events}} --> hype([Hype Train])
      eventsTwitch{{Random events}} --> trolls([Trolls])

      style start fill:#e31010,stroke:#e1e1e1,stroke-width:1px,color:#fff
      style twitch fill:#9147ff,stroke:#e1e1e1,stroke-width:1px,color:#e1e1e1
      style eventsTwitch fill:#9147ff,stroke:#e1e1e1,stroke-width:1px,color:#e1e1e1
      style modos fill:#9147ff,stroke:#e1e1e1,stroke-width:1px,color:#e1e1e1
      style hype fill:#9147ff,stroke:#e1e1e1,stroke-width:1px,color:#e1e1e1
      style trolls fill:#9147ff,stroke:#e1e1e1,stroke-width:1px,color:#e1e1e1
      style editors fill:#3C99D6,stroke:#e1e1e1,stroke-width:1px,color:#e1e1e1
      style evol fill:#00E6CA,stroke:#e1e1e1,stroke-width:1px,color:#000
      style web fill:#FF33FF,stroke:#e1e1e1,stroke-width:1px,color:#fff
      style eventsWeb fill:#FF33FF,stroke:#e1e1e1,stroke-width:1px,color:#fff
      style hardware fill:#FF33FF,stroke:#e1e1e1,stroke-width:1px,color:#fff
      style shop fill:#FF33FF,stroke:#e1e1e1,stroke-width:1px,color:#fff
      style hs fill:#FF33FF,stroke:#e1e1e1,stroke-width:1px,color:#fff
      style crowdfunding fill:#FF33FF,stroke:#e1e1e1,stroke-width:1px,color:#fff
      style goodies fill:#FF33FF,stroke:#e1e1e1,stroke-width:1px,color:#fff

```
<br>
<br>

## Market
<br>

  ### Goodies

  - Unlock Goodies icon drop
  - Upgrade money by `#smolamount`
  
    #### Levels (1-3)

    - More upgrade === more event + more goodies + more icons differents
    - ![abo-ico](Canard-PC-stickers.png)

  ### CPC Hardware

  - Unlock CPC Hardware icon drop
  -  /!\ Need special editor /!\
  - Upgrade money by `#bigamount`
    
<br>
<br>


## Twitch
<br>

- Unlock Twitch icon drop
- Upgrade money by `#smolamount`

    ### Levels (1-7)

    - ![abo-ico](Abonnements-Twitch.png)
    - More upgrade === more event + more trolls appearance
    - Each level has his own color
    - Each level has his own value

<br>
<br>

## Editors
<br>

- Unlock editor selection
- Each editor has unique : 
  - Abilities
  - Automatic click rate (Upgrade money by `#customamount`)
  - Icon
  - Salary

  ### Levels (1-5)

  - More upgrade === more editor hired at the same time


<br>
<br>

## Random Events
<br>

### Web

  - Hors Series (bonus of number of `subscription icons` falling + `#smolamount` of money)
  - Crowdfunding :
  
      - Can be failed if gauge not full when ending
      - Special icon when triggered
      - Only his icon fill the gauge
      - if failed money is lost
      - if succeded all money is earned and x2 (??)


### Twitch

  - Hype train  (bonus of number of `Twitch icons` falling + `#smolamount` of money)
  - Trolls :
  
      - Same `Twitch icons` but cost money instead of earning
      - Special effect when clicked





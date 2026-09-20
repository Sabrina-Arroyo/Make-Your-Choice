const story = {

  START: {
    text: `The Creator looks down upon the world.

Peace is gone.

Strange creatures wander across the land, and even the colors of the world seem to be disappearing.

The Creator descends to investigate.

But the moment they arrive...

Their godly powers disappear.`,
    choices: [
      { text: "A — Try to fly", next: "FALLING_FOREST" },
      { text: "B — Enter the strange cave", next: "THE_WHITE_TENTACLE" },
      { text: "C — Call out to the creations", next: "SOMETHING_HEARD" }
    ]
  },

  FALLING_FOREST: {
    text: `The Creator tries to fly.

Nothing happens.

They jump anyway.

The Creator falls through the clouds and crashes into a strange forest.

Somewhere nearby, a bell begins ringing.

The Creator follows the sound.`,
    choices: [
      { text: "A — Follow the ringing", next: "THE_BELLWALKER" },
      { text: "B — Try to climb back out", next: "THE_FALL" },
      { text: "C — Run deeper into the forest", next: "THE_FOREST" }
    ]
  },

  THE_WHITE_TENTACLE: {
    text: `The Creator enters a dark cave.

Something small and white moves in the darkness.

A tiny white tentacle.

The Creator stares at it.

"I never created anything disgusting and slimy with white tentacles."

Then something enormous moves behind them.

A gigantic ant emerges.

It is the first creature the Creator ever created.

But now it is enormous.

Its body is white and colorless.

It has no eyes.

White tentacles cover its body, draining the color from everything around it.

The Creator escapes through the cave and reaches the mountain.

The strange tentacle feels familiar.

It reminds the Creator of a white squid from long ago.`,
    choices: [
      { text: "A — Return to the cave", next: "THE_COLORLESS_CAVE" },
      { text: "B — Go toward the village", next: "THE_VILLAGE" },
      { text: "C — Touch the tentacle", next: "COLORLESS" }
    ]
  },

  SOMETHING_HEARD: {
    text: `The Creator calls out to their creations.

"Hello?"

A massive response echoes across the world.

The ground shakes.

The Creator realizes that calling every creation at once probably wasn't a very good idea.`,
    choices: [
      { text: "A — Run into the forest", next: "SOMETHING_FOUND_YOU" },
      { text: "B — Stay where you are", next: "THE_COLLAPSE" },
      { text: "C — Call out even louder", next: "TOO_LOUD" }
    ]
  },

  THE_VILLAGE: {
    text: `The Creator reaches a small village.

The villagers recognize them.

There are statues of the Creator everywhere.

The villagers give the Creator food.

But something is wrong.

Farm animals have been disappearing.

The villagers whisper about a giant Rock Monster seen near the caves.

The Creator doesn't remember creating anything like that.`,
    choices: [
      { text: "A — Search for the missing animals alone", next: "THE_HOLLOW_DEER" },
      { text: "B — Find the Rock Monster", next: "THE_ROCK_MONSTER" },
      { text: "C — Investigate the strange voices", next: "THE_WHISPERING_CROW" }
    ]
  },

  THE_ROCK_MONSTER: {
    text: `The Creator enters a cave.

Inside are dungeons, destroyed objects, and old skeletons.

A giant Rock Monster appears.

But it doesn't attack.

It seems friendly.

The Rock Monster has actually been protecting the farm animals from something attacking them.

It is badly injured.

The Creator remembers something.

The giant ant and the Rock Monster used to be friends.

The Creator remembers creating a mountain shaped like the Rock Monster.

They had tried to give the mountain life.

But the ant has no eyes.

No senses.

The Creator notices a strange red substance just out of reach.

They give the red juice to the Rock Monster.

The Rock Monster absorbs the substance.

Pebbles begin forming across its body.

The cave begins to crumble.

The Rock Monster throws the Creator outside.

The Creator lands directly on its face.`,
    choices: [
      { text: "A — Run as the cave collapses", next: "THE_COLLAPSE" },
      { text: "B — Follow the red glow", next: "THE_RED_GLOW" },
      { text: "C — Walk into the strange fog", next: "THE_FOG_WALKER" }
    ]
  },

  THE_RED_GLOW: {
    text: `The Creator follows a strange red glow.

They discover a tube that looks like a giant living heart.

The same red substance flows through it.

The Creator is disgusted.

They vomit.

When they return, the strange tube is gone.

But three things remain.

A glowing white hammer.

A pair of beloved childhood shoes.

And a ripped picture showing only the Creator.

The Creator doesn't understand what any of it means.`,
    choices: [
      { text: "A — Pick up the glowing hammer", next: "THE_HAMMER" },
      { text: "B — Examine the purple crystal", next: "THE_PURPLE_CRYSTAL" },
      { text: "C — Examine the ripped picture", next: "THE_PICTURE" }
    ]
  },

  THE_PURPLE_CRYSTAL: {
    text: `The Creator remembers trying to create a time machine.

They traveled into the future.

They saw phones.

Technology.

Things they had never seen before.

But without their powers, they cannot travel through time again.

The purple crystal is different.

It is a memory device.

The Creator touches it.

A memory appears.

Their mother is holding a baby.`,
    choices: [
      { text: "A — Try to remember everything", next: "THE_WRONG_MEMORY" },
      { text: "B — Follow the memory of the family", next: "THE_SISTER" },
      { text: "C — Replay the future", next: "THE_FUTURE" }
    ]
  },

  THE_SISTER: {
    text: `The memory continues.

The Creator's mother is holding a baby.

Then—

"Oi!"

A girl appears.

She looks strangely familiar.

She stares at the Creator.

"Are you my long-lost brother?"

The Creator's memories begin returning.

Their mother.

Their father.

Their family.

But their family died after the universe collapsed.

When the universe reopened, there was a strange planet.

A planet that looked almost like Earth.`,
    choices: [
      { text: "A — Follow the Sky Serpent", next: "THE_SKY_SERPENT" },
      { text: "B — Ask about the forgotten creation", next: "THE_FORGOTTEN_CREATION" },
      { text: "C — Ask where the rest of the family went", next: "THE_ROOTS" }
    ]
  },

  THE_FORGOTTEN_CREATION: {
    text: `The sister explains what she remembers.

The Creator suddenly remembers creating something incredibly powerful shortly before the universe collapsed.

Young Creator had an idea.

They stripped some of their godly goodness away.

They placed that part inside a new creation.

They molded it.

Then they placed more of the universe inside it.

But something went wrong.

The Creator may have accidentally taken part of one of the universe's pillars.

They gave the creation intellect.

But not enough.

They were still young.

They became exhausted.

Then they slept.

For 3,000 years.

That sleep saved the Creator from the universe's collapse.

But when they woke up...

They remembered nothing.`,
    choices: [
      { text: "A — Try to remember everything at once", next: "TOO_MANY_MEMORIES" },
      { text: "B — Find the Purifier", next: "THE_PURIFIER" },
      { text: "C — Blame the forgotten creation", next: "THE_WRONG_BLAME" }
    ]
  },

  THE_PURIFIER: {
    text: `The forgotten creation was called the Purifier.

The Creator made it to prevent themselves from becoming evil.

But the Purifier forgot its purpose.

Just like the Creator, it had forgotten.

Its intellect was incomplete.

It believed it was the Creator.

When it saw the real Creator creating things, it thought it was simply the Creator.

Then it found the real Creator.

Something felt wrong.

The Purifier became suspicious.

It decided the real Creator must be an impostor.

So it stripped away the Creator's godly powers.

The Creator realizes something terrifying.

They could have done the exact same thing to the Purifier.

But they didn't remember.`,
    choices: [
      { text: "A — Destroy the Purifier", next: "THE_PURIFIER_END" },
      { text: "B — Follow its creations into the future", next: "THE_FUTURE_CREATIONS" },
      { text: "C — Leave the world with your sister", next: "LEAVING_THE_WORLD" }
    ]
  },

  THE_FUTURE_CREATIONS: {
    text: `The Purifier believed it was the Creator.

So it created things.

Then it traveled into the future.

It saw phones.

Technology.

Strange machines.

And creepy things.

It brought ideas from the future back into the world.

Many of the strange monsters may actually be confused creations.

The Creator and their sister continue their journey.`,
    choices: [
      { text: "A — Search for the Clockwork Wolf", next: "CLOCKWORK" },
      { text: "B — Meet the strange creatures", next: "THE_STRANGE_CREATURES" },
      { text: "C — Search for the Root Monster", next: "THE_ROOT_MONSTER" }
    ]
  },

  THE_STRANGE_CREATURES: {
    text: `The Creator and their sister encounter strange creatures.

The Bellwalker.

The Hollow Deer.

The Whispering Crow.

The Fog Walker.

The Clockwork Wolf.

The Root Monster.

The Sky Serpent.

And then—

A creature that looks exactly like the Creator.

The Creator realizes something important.

Scary doesn't always mean evil.`,
    choices: [
      { text: "A — Chase the creature", next: "THE_MIRROR_END" },
      { text: "B — Follow the creature", next: "THE_MIRROR" },
      { text: "C — Attack the strange creatures", next: "THE_WRONG_FIGHT" }
    ]
  },

  THE_MIRROR: {
    text: `The creature looks like the Creator from far away.

But when they get closer, its appearance changes.

The sister looks at it.

"That isn't you."

The Creator realizes it may be another creation of the Purifier.`,
    choices: [
      { text: "A — Fight it", next: "MIRROR_MATCH" },
      { text: "B — Follow it to the Purifier's home", next: "THE_PURIFIER_HOME" },
      { text: "C — Demand to know who the Creator really is", next: "WHO_IS_THE_CREATOR" }
    ]
  },

  THE_PURIFIER_HOME: {
    text: `The Creator and their sister find the Purifier.

It looks like a giant living heart.

Tubes and veins spread throughout the strange room.

The red substance flows through it.

But the Purifier isn't attacking.

It is creating things.

It doesn't seem evil.

It simply doesn't understand what it is.`,
    choices: [
      { text: "A — Take its power", next: "POWER_OVERLOAD" },
      { text: "B — Create a plan to repair it", next: "THE_FINAL_PLAN" },
      { text: "C — Call out to it", next: "TOO_MUCH_POWER" }
    ]
  },

  THE_FINAL_PLAN: {
    text: `The Creator finally understands.

The Purifier isn't evil.

It simply forgot.

Its intellect is incomplete.

It believed it was the Creator.

The Creator has a plan.

They will sneak up carefully.

They will remove the incomplete intellect.

But they won't destroy the Purifier.

They will rebuild it.

The Creator and their sister will give it a new purpose:

Protect the world.

Keep its creations peaceful.`,
    choices: [
      { text: "A — Make one final mistake", next: "THE_LAST_MISTAKE" },
      { text: "B — Rebuild the Purifier", next: "GOOD_ENDING" },
      { text: "C — Explain everything without repairing it", next: "IT_STILL_FORGOT" }
    ]
  },

  THE_BELLWALKER: {
    ending: true,
    text: `The Bellwalker rings its bell.

The Creator follows the sound deeper into the forest.

They don't notice the ground disappearing beneath their feet.

The Creator takes one more step and falls into a deep ravine.

Without their godly powers, they cannot save themselves.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_FALL: {
    ending: true,
    text: `The Creator jumps into the sky.

They wait for their powers to return.

They don't.

The ground gets closer.

Very quickly.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_FOREST: {
    ending: true,
    text: `The Creator runs deeper into the forest.

The trees become thicker.

The Creator looks behind them.

Nothing.

They turn around again.

A root catches their foot.

They fall down a steep hillside and disappear into the darkness.

THE CREATOR HAS DIED.`,
    restart: true
  },

  SOMETHING_FOUND_YOU: {
    ending: true,
    text: `The Creator stays perfectly still.

Something enormous walks closer.

The Creator realizes hiding isn't going to work.

The creature reaches down.

Everything goes dark.

THE CREATOR HAS DIED.`,
    restart: true
  },

  TOO_LOUD: {
    ending: true,
    text: `The Creator calls out even louder.

This time, something answers.

The sound is so powerful that the ground begins shaking.

The Creator looks around.

Every creature in the world has heard them.

Unfortunately, they are all coming.`,
    restart: true
  },

  
  THE_COLLAPSE: {
    ending: true,
    text: `The ground shakes.

The cave begins collapsing.

The Creator tries to escape.

A huge piece of rock falls from the ceiling.

There is nowhere to go.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_COLORLESS_CAVE: {
    ending: true,
    text: `The Creator enters the cave.

The ant has no eyes, but somehow knows they are there.

Its white tentacles move toward the Creator.

The Creator tries to run.

The cave begins losing its color.

Then the Creator loses their balance.

They fall into a deep pit inside the cave.

Without their powers, they cannot escape.

THE CREATOR HAS DIED.`,
    restart: true
  },

  COLORLESS: {
    ending: true,
    text: `The tentacle wraps around the Creator.

Color begins disappearing from the cave.

The Creator tries to pull away.

The tentacle pulls harder.

The Creator is dragged into the darkness.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_HOLLOW_DEER: {
    ending: true,
    text: `The Creator sees an enormous Hollow Deer.

Its glowing markings light up the darkness.

The Creator follows it deeper into the forest.

The Deer suddenly disappears.

The Creator takes another step.

The ground gives way.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_WHISPERING_CROW: {
    ending: true,
    text: `A giant Whispering Crow lands on the village roof.

It speaks using the Creator's voice.

Then their mother's voice.

Then their sister's voice.

The Creator follows the familiar voice outside the village.

The voice leads them toward a cliff.

The Creator takes one step too far.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_FOG_WALKER: {
    ending: true,
    text: `The fog becomes thicker.

The Creator can't see the village anymore.

A huge silhouette appears in the distance.

The Creator follows it.

Suddenly, the ground disappears beneath them.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_HAMMER: {
    ending: true,
    text: `The Creator picks up the hammer.

It suddenly begins glowing brighter.

The Creator remembers using it to build things when they were young.

They accidentally swing it.

The hammer creates something enormous directly above them.

It falls.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_PICTURE: {
    ending: true,
    text: `The Creator stares at the picture.

Their face inside the picture suddenly moves.

The picture whispers:

"You forgot me."

The Creator reaches toward it.

The picture pulls them inside.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_WRONG_MEMORY: {
    ending: true,
    text: `The crystal shows a place the Creator doesn't recognize.

A Clockwork Wolf appears.

The Creator tries to back away.

They step onto an old machine.

It suddenly activates.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_FUTURE: {
    ending: true,
    text: `The crystal shows the future.

The Creator sees strange machines.

Then the Clockwork Wolf.

Then something enormous behind it.

The crystal begins shaking.

The Creator tries to turn it off.

It explodes.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_SKY_SERPENT: {
    ending: true,
    text: `The Sky Serpent flies toward a mountain.

The Creator follows.

They climb higher and higher.

The Serpent flies away.

The Creator looks down.

They realize they are much too high.

Their foot slips.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_ROOTS: {
    ending: true,
    text: `The sister doesn't know.

Suddenly, enormous roots burst through the ground.

The Creator tries to escape.

The roots wrap around their legs and pull them underground.

THE CREATOR HAS DIED.`,
    restart: true
  },

  TOO_MANY_MEMORIES: {
    ending: true,
    text: `Thousands of memories rush into the Creator's mind.

The Creator sees the beginning of the world.

The future.

The universe collapsing.

The Purifier.

Their family.

Everything happens at once.

The Creator collapses.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_WRONG_BLAME: {
    ending: true,
    text: `The Creator decides the Purifier must have done everything intentionally.

They rush toward it.

But they don't understand what they're dealing with.

The Purifier reacts.

The Creator is struck by the stolen godly power.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_PURIFIER_END: {
    ending: true,
    text: `The Creator attacks.

The Purifier doesn't understand why.

It tries to defend itself.

The stolen godly power surges through the room.

The Creator is caught in the blast.

THE CREATOR HAS DIED.`,
    restart: true
  },

  LEAVING_THE_WORLD: {
    ending: true,
    text: `The Creator and their sister begin walking away.

But the world around them begins changing.

The ground cracks.

The sky changes color.

The Creator realizes that leaving the world won't stop what is happening to it.

A crack opens beneath them.

THE CREATOR HAS DIED.`,
    restart: true
  },

  CLOCKWORK: {
    ending: true,
    text: `The Clockwork Wolf runs into an abandoned machine.

The Creator follows.

The machine suddenly turns on.

Gears begin spinning everywhere.

The Creator gets caught between two moving pieces.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_ROOT_MONSTER: {
    ending: true,
    text: `The Creator finds the Root Monster.

Before they can do anything, enormous roots burst from the ground.

The Creator tries to run.

The roots pull them underneath the earth.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_MIRROR_END: {
    ending: true,
    text: `The Mirror Creature runs away.

The Creator follows.

It disappears around a corner.

The Creator follows it.

There is no creature there.

Only a cliff.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_WRONG_FIGHT: {
    ending: true,
    text: `The Creator attacks.

The creatures scatter.

But one of them was protecting the Creator from something much worse.

The ground suddenly collapses.

The Creator falls.

THE CREATOR HAS DIED.`,
    restart: true
  },

  MIRROR_MATCH: {
    ending: true,
    text: `The Mirror Creature copies the Creator's movements.

The Creator attacks.

The Mirror Creature attacks at exactly the same time.

The Creator's own attack comes back at them.

THE CREATOR HAS DIED.`,
    restart: true
  },

  WHO_IS_THE_CREATOR: {
    ending: true,
    text: `The Mirror Creature smiles.

It changes into the Creator.

Then it changes into the sister.

Then the Purifier.

The Creator becomes confused.

They step backward without looking.

There is a cliff behind them.

THE CREATOR HAS DIED.`,
    restart: true
  },

  POWER_OVERLOAD: {
    ending: true,
    text: `The Creator reaches for the stolen power.

The Purifier doesn't understand.

The power rushes toward the Creator.

There is too much.

The entire room flashes white.

THE CREATOR HAS DIED.`,
    restart: true
  },

  TOO_MUCH_POWER: {
    ending: true,
    text: `The Purifier turns around.

It recognizes the Creator.

But it still believes it is the Creator.

Confused, it releases too much of its power.

The Creator is caught in the blast.

THE CREATOR HAS DIED.`,
    restart: true
  },

  THE_LAST_MISTAKE: {
    ending: true,
    text: `The Creator attacks the Purifier.

The Purifier tries to protect itself.

The stolen godly power surges through the room.

The Creator realizes they have repeated the same mistake they made when they were young.

But there is no time to fix it.

THE CREATOR HAS DIED.`,
    restart: true
  },

  IT_STILL_FORGOT: {
    ending: true,
    text: `The Creator explains everything.

The Purifier listens.

It tries to understand.

But its intellect is still incomplete.

It becomes confused.

The Purifier accidentally releases its power.

The Creator is caught in it.

THE CREATOR HAS DIED.`,
    restart: true
  },

  GOOD_ENDING: {
    ending: true,
    good: true,
    text: `The Creator and their sister carefully sneak up on the Purifier.

The Creator strips away the Purifier's incomplete intellect.

But they don't destroy it.

They rebuild it.

This time, they make sure there are no mistakes.

The sister helps.

The Purifier remembers.

It remembers that it isn't the Creator.

It remembers its true purpose.

The Creator gives it a new purpose:

Protect the world and keep its creations peaceful.

The Purifier returns the Creator's godly powers.

The Creator begins restoring the corrupted creatures.

The Rock Monster returns to protecting the animals.

The ant can finally be helped.

The strange creatures are no longer automatically treated as enemies.

The Creator and their sister rebuild the world together.

And this time, the Creator remembers.

They don't forget.

They don't destroy what they don't understand.

They take responsibility for what they created.

The world becomes peaceful again.

THE CREATOR REMEMBERS.

THE WORLD IS PEACEFUL AGAIN.`,
    restart: true
  }

};


function showScene(nodeName) {
  const node = story[nodeName];

  const storyElement = document.getElementById("story");
  const choicesElement = document.getElementById("choices");

  storyElement.innerHTML = node.text.replace(/\n/g, "<br><br>");
  choicesElement.innerHTML = "";

  if (node.ending) {
    const restartButton = document.createElement("button");

    restartButton.className = "choice";
    restartButton.textContent = "Restart";

    restartButton.addEventListener("click", () => {
      showScene("START");
    });

    choicesElement.appendChild(restartButton);
    return;
  }

  node.choices.forEach(choice => {
    const button = document.createElement("button");

    button.className = "choice";
    button.textContent = choice.text;

    button.addEventListener("click", () => {
      showScene(choice.next);
    });

    choicesElement.appendChild(button);
  });
}


showScene("START");

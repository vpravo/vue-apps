<template>
  <div class="container text-center pt-5">
    <!-- Теперь значение counter будем брать из store -->
    <!-- <app-counter :counter="counter"></app-counter> -->
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <hr />
    <!-- Так как значение counter берем из store нет необходимости слушать событие для изменения counter -->
    <!-- <app-actions @counterUpdate="counter +=$event"></app-actions> -->
    <app-actions></app-actions>
  </div>
</template>

<script>
import Counter from "./counter"
import Actions from "./actions"
import SecondCounter from "./second-counter"
export default {
  data() {
    return {
      //Значение counter берем из store
      //counter: 0
    }
  },
  components: {
    appCounter: Counter,
    appActions: Actions,
    appSecondCounter: SecondCounter
  }
}
</script>

<style></style>

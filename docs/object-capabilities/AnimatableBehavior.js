var gdjs;(function(t){class a extends t.RuntimeBehavior{constructor(e,i,n){super(e,i,n);this.object=n}usesLifecycleFunction(){return!1}updateFromBehaviorData(e,i){return!0}onDeActivate(){}onDestroy(){}doStepPreEvents(e){}doStepPostEvents(e){}getAnimationIndex(){return this.object.getAnimationIndex()}setAnimationIndex(e){this.object.setAnimationIndex(e)}getAnimationName(){return this.object.getAnimationName()}setAnimationName(e){this.object.setAnimationName(e)}isCurrentAnimationName(e){return this.object.isCurrentAnimationName(e)}hasAnimationEnded(){return this.object.hasAnimationEnded()}isAnimationPaused(){return this.object.isAnimationPaused()}pauseAnimation(){this.object.pauseAnimation()}resumeAnimation(){this.object.resumeAnimation()}getAnimationSpeedScale(){return this.object.getAnimationSpeedScale()}setAnimationSpeedScale(e){this.object.setAnimationSpeedScale(e)}getAnimationElapsedTime(){return this.object.getAnimationElapsedTime()}setAnimationElapsedTime(e){this.object.setAnimationElapsedTime(e)}getAnimationDuration(){return this.object.getAnimationDuration()}}t.AnimatableBehavior=a,t.registerBehavior("AnimatableCapability::AnimatableBehavior",t.AnimatableBehavior)})(gdjs||(gdjs={}));
//# sourceMappingURL=AnimatableBehavior.js.map
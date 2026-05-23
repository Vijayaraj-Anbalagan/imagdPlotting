export function logChartInteractionEvent({
  interactionType,
  visualizationLibrary,
  interactionSource,
}) {
  console.log({
    type: interactionType,
    library: visualizationLibrary,
    source: interactionSource,
  });
}

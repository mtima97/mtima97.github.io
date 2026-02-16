<script setup>
import ResumeHeader from '@/components/resume/ResumeHeader.vue'
import ResumeSummary from '@/components/resume/ResumeSummary.vue'
import ResumeContacts from '@/components/resume/ResumeContacts.vue'
import ResumeSkills from '@/components/resume/ResumeSkills.vue'
import ResumeLanguages from '@/components/resume/ResumeLanguages.vue'
</script>

<template>
    <div id="resume">
        <ResumeHeader />
        <ResumeSummary />
        <ResumeContacts />
        <ResumeSkills />
        <ResumeLanguages />
        <!-- Exp, Education, Projects -->
    </div>
</template>

<style scoped lang="scss"></style>

<script setup>
import ResumeHeader from '@/components/resume/ResumeHeader.vue'
import ResumeSummary from '@/components/resume/ResumeSummary.vue'
import ResumeContacts from '@/components/resume/ResumeContacts.vue'
import ResumeSkills from '@/components/resume/ResumeSkills.vue'
import ResumeLanguages from '@/components/resume/ResumeLanguages.vue'
import ResumeExperience from '@/components/resume/ResumeExperience.vue'
</script>

<template>
    <div id="resume">
        <ResumeHeader />
        <ResumeSummary />
        <ResumeContacts />
        <ResumeSkills />
        <ResumeLanguages />
        <ResumeExperience />
        <!-- Exp, Education, Projects -->
    </div>
</template>

<style scoped lang="scss"></style>
